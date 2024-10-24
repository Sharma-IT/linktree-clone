import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import {
  LinkedinIcon,
  FileTextIcon,
  BookOpenIcon,
  NewspaperIcon,
  BookIcon,
  MailIcon,
  PhoneIcon,
  CodeIcon,
  GlobeIcon,
} from 'lucide-react';

import { SiGithub, SiX } from 'react-icons/si';

const TechStack = () => {
  return (
    <div className="w-full mt-4 p-4 bg-secondary rounded-lg">
      <h2 className="text-lg font-semibold mb-2 flex items-center">
        <CodeIcon className="mr-2 h-5 w-5" />
        Tech Stack
      </h2>
      <p className="text-sm text-muted-foreground">
        This web app is built with React, Vite, TypeScript, Tailwind CSS, and
        shadcn/ui components.
      </p>
    </div>
  );
};

const ContactMe = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          title: 'Copied to clipboard',
          description: `My ${type} has been copied to your clipboard.`,
        });
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
        toast({
          title: 'Failed to copy',
          description: 'An error occurred while copying to clipboard.',
          variant: 'destructive',
        });
      });
  };

  return (
    <div className="flex justify-center space-x-4 mt-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={() =>
          copyToClipboard('your.email@email.com', 'Email')
        }
        title="Copy email"
      >
        <MailIcon className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => copyToClipboard('+0', 'Phone number')}
        title="Copy phone number"
      >
        <PhoneIcon className="h-6 w-6" />
      </Button>
    </div>
  );
};

const LinktreeProfile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center space-y-4 pt-6">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src="https://github.com/github.png"
              alt="Your GitHub Profile Picture"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold">Your Name</h1>
          <p className="text-muted-foreground text-center">
            Your Professional Title | And | Anything | Else | You | Want | To | Add
          </p>
          <ContactMe />
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Tool</Badge>
            <Badge variant="secondary">Library</Badge>
            <Badge variant="secondary">Framework</Badge>
          </div>
          <div className="w-full space-y-2">
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://github.com/your_name"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://linkedin.com/in/your_name"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://x.com/your_name"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiX className="mr-2 h-4 w-4" />
                X
              </a>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://docs.google.com/document/d/x"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileTextIcon className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://your-portfolio.netifly.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeIcon className="mr-2 h-4 w-4" />
                Portfolio
              </a>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://medium.com/@your_name"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewspaperIcon className="mr-2 h-4 w-4" />
                Medium Stories
              </a>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://yoursubstack.substack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpenIcon className="mr-2 h-4 w-4" />
                Substack Newsletter
              </a>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://academia.edu/your_name"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookIcon className="mr-2 h-4 w-4" />
                Academic Papers
              </a>
            </Button>
          </div>
          <TechStack />
        </CardContent>
      </Card>
      <Toaster />
    </div>
  );
};

export default LinktreeProfile;
