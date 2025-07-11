'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { MessageSquare, Bot, Send, X, User } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { AnimatePresence, motion } from 'framer-motion';

type Message = {
    sender: 'user' | 'bot';
    text: string;
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'bot', text: "Hello! I'm a bot. Ask me anything about Syed." }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { sender: 'user', text: input }]);
            // Mock bot response
            setTimeout(() => {
                setMessages(prev => [...prev, { sender: 'bot', text: "This is a placeholder response." }]);
            }, 1000);
            setInput('');
        }
    };

    return (
        <>
            <div className="fixed bottom-4 right-4 z-50">
                <Button onClick={() => setIsOpen(!isOpen)} size="icon" className="rounded-full w-14 h-14 shadow-lg">
                    <AnimatePresence>
                        {isOpen ? <X /> : <MessageSquare />}
                    </AnimatePresence>
                </Button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.5 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.5 }}
                        className="fixed bottom-20 right-4 z-50"
                    >
                        <Card className="w-[350px] h-[500px] flex flex-col shadow-2xl">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Bot className="text-primary" />
                                    <CardTitle className="text-lg font-headline">Chat with Me</CardTitle>
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                                    <X className="h-4 w-4" />
                                </Button>
                            </CardHeader>
                            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                                {messages.map((msg, index) => (
                                    <div key={index} className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                                        {msg.sender === 'bot' && <Bot className="w-6 h-6 text-primary flex-shrink-0" />}
                                        <div className={`rounded-lg px-3 py-2 max-w-[80%] ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                                            <p className="text-sm">{msg.text}</p>
                                        </div>
                                         {msg.sender === 'user' && <User className="w-6 h-6 text-muted-foreground flex-shrink-0" />}
                                    </div>
                                ))}
                            </CardContent>
                            <CardFooter>
                                <div className="flex w-full items-center space-x-2">
                                    <Input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                        placeholder="Type a message..."
                                    />
                                    <Button onClick={handleSend}><Send /></Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
