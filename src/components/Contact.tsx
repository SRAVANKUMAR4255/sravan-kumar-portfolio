import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from 'emailjs-com';
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

// Form validation schema
const formSchema = z.object({
  from_name: z.string().min(2, "Name must be at least 2 characters"),
  from_email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const { toast } = useToast();
  
  // Initialize form with zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setFormError(null);
    
    try {
      // Define constants for EmailJS
      const serviceID = 'service_8fftsra';
      const notificationTemplateID = 'template_qzwy0jp';
      const autoReplyTemplateID = 'template_gk26q0k';
      const publicKey = 'pRJEOMAdjTnwjr7Zy';
      
      // Send notification email to site owner
      try {
        console.log('Sending notification email with params:', {
          from_name: values.from_name,
          from_email: values.from_email,
          message: values.message,
        });
        
        const notificationResponse = await emailjs.send(
          serviceID, 
          notificationTemplateID, 
          {
            from_name: values.from_name,
            from_email: values.from_email,
            message: values.message,
          },
          publicKey
        );
        console.log('Notification email sent successfully:', notificationResponse);
      } catch (error) {
        console.error('Notification email failed:', error);
        throw new Error('Failed to send notification email');
      }
      
      // Send auto-reply email to the person who submitted the form
      let autoReplySuccess = false;
      try {
        // Ensure parameters match EXACTLY what's in the EmailJS template
        const autoReplyParams = {
          to_name: values.from_name,
          to_email: values.from_email,
          message: "Thank you for contacting me. I'll get back to you as soon as possible."
        };
        
        console.log('Sending auto-reply email with params:', autoReplyParams);
        
        const autoReplyResponse = await emailjs.send(
          serviceID, 
          autoReplyTemplateID, 
          autoReplyParams,
          publicKey
        );
        console.log('Auto-reply email sent successfully:', autoReplyResponse);
        autoReplySuccess = true;
      } catch (error) {
        console.error('Auto-reply email failed:', error);
        // Don't throw here, we'll still show success if notification email worked
      }
      
      toast({
        title: "Message Sent!",
        description: autoReplySuccess 
          ? "Thanks for reaching out. I've sent you a confirmation email."
          : "Thanks for reaching out. I've received your message.",
        duration: 5000,
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      setFormError("Failed to send message. Please try again later.");
      toast({
        title: "Message Failed",
        description: "Sorry, something went wrong. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" ref={ref} className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Get In <span className="highlight-text">Touch</span></h2>
          <div className="w-24 h-1 bg-highlight mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out to me for any questions, opportunities, or just to say hello. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:sravankumargutta@gmail.com" className="text-gray-400 hover:text-highlight">sravankumargutta@gmail.com</a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Connect</h4>
                  <div className="flex space-x-3 mt-2">
                    <motion.a 
                      href="https://github.com/SRAVANKUMAR4255" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-highlight"
                      whileHover={{ scale: 1.3 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="https://www.linkedin.com/in/sravan-kumar-gutta/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-highlight"
                      whileHover={{ scale: 1.3 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <blockquote className="p-6 glass-card border-l-4 border-highlight italic">
                "Code is the language of the future. Through constant learning and development, I strive to build solutions that make an impact."
              </blockquote>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              {formError && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{formError}</AlertDescription>
                </Alert>
              )}
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="from_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:border-highlight"
                            placeholder="John Doe"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="from_email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            type="email"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:border-highlight"
                            placeholder="john@example.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:border-highlight min-h-[150px]"
                            placeholder="Write your message here..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-highlight text-white font-medium rounded-md shadow-lg shadow-highlight/20 hover:bg-highlight/90 transition-colors w-full disabled:opacity-70"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
