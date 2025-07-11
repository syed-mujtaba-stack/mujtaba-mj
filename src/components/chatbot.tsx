'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { MessageSquare, Bot, Send, X, User, Loader2 } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { AnimatePresence, motion } from 'framer-motion';
import { chatStream } from '@/ai/flows/chat-flow';
import { ScrollArea } from './ui/scroll-area';

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
    const [isLoading, setIsLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({
                top: scrollAreaRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (input.trim()) {
            const userMessage: Message = { sender: 'user', text: input };
            setMessages(prev => [...prev, userMessage]);
            setInput('');
            setIsLoading(true);

            setMessages(prev => [...prev, { sender: 'bot', text: '' }]);

            try {
                const stream = await chatStream({ message: input });
                const reader = stream.getReader();
                const decoder = new TextDecoder();
                
                let done = false;
                while (!done) {
                    const { value, done: readerDone } = await reader.read();
                    done = readerDone;
                    const chunk = decoder.decode(value, { stream: true });
                    
                    setMessages(prev => {
                        const lastMessage = prev[prev.length - 1];
                        if (lastMessage.sender === 'bot') {
                            return [
                                ...prev.slice(0, -1),
                                { ...lastMessage, text: lastMessage.text + chunk }
                            ];
                        }
                        return prev;
                    });
                }
            } catch (error) {
                console.error("Error fetching bot response:", error);
                setMessages(prev => {
                    const lastMessage = prev[prev.length - 1];
                    if (lastMessage.sender === 'bot') {
                        return [
                            ...prev.slice(0, -1),
                            { ...lastMessage, text: "Sorry, I'm having trouble connecting. Please try again later." }
                        ];
                    }
                    return prev;
                });
            } finally {
                setIsLoading(false);
            }
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
                            <CardContent className="flex-1 p-0">
                                <ScrollArea className="h-full" ref={scrollAreaRef}>
                                    <div className="p-4 space-y-4">
                                        {messages.map((msg, index) => (
                                            <div key={index} className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                                                {msg.sender === 'bot' && <Bot className="w-6 h-6 text-primary flex-shrink-0" />}
                                                <div className={`rounded-lg px-3 py-2 max-w-[80%] ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                                                    <p className="text-sm">{msg.text}</p>
                                                </div>
                                                {msg.sender === 'user' && <User className="w-6 h-6 text-muted-foreground flex-shrink-0" />}
                                            </div>
                                        ))}
                                        {isLoading && messages[messages.length - 1]?.text === '' && (
                                            <div className="flex items-start gap-2">
                                                <Bot className="w-6 h-6 text-primary flex-shrink-0" />
                                                <div className="rounded-lg px-3 py-2 max-w-[80%] bg-secondary">
                                                   <Loader2 className="w-5 h-5 animate-spin" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </ScrollArea>
                            </CardContent>
                            <CardFooter>
                                <div className="flex w-full items-center space-x-2">
                                    <Input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                                        placeholder="Type a message..."
                                        disabled={isLoading}
                                    />
                                    <Button onClick={handleSend} disabled={isLoading}><Send /></Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
