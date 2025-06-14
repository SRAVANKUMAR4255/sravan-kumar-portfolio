
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
      <DialogContent className="fixed left-1/2 top-1/2 z-50 flex w-[90vw] max-w-[1500px] h-[90vh] max-h-[1000px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg border bg-background shadow-xl p-0 overflow-hidden">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-bold">Resume</h2>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => window.open(resumeUrl, '_blank')} size="sm">
              Open in New Tab
            </Button>
            <Button variant="outline" onClick={onClose} size="sm">
              Close
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-auto"> {/* Container for iframe to allow scrolling */}
          <iframe
            src={resumeUrl}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Resume Viewer"
            // Adding sandbox attributes for potentially better embedding if issues persist, though not strictly for sizing
            // sandbox="allow-scripts allow-same-origin allow-popups allow-forms" 
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeViewer;
