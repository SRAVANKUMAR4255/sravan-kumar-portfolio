
import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from './ui/button';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({ isOpen, onClose, resumeUrl }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[90%] max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-2 flex justify-between items-center">
          <h2 className="text-xl font-bold">Resume</h2>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => window.open(resumeUrl, '_blank')}>
              Open in New Tab
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
        <div className="flex-1 min-h-[70vh] overflow-hidden rounded-md border">
          <iframe
            src={resumeUrl} // Changed this line
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Resume Viewer"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeViewer;

