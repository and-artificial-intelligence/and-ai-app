import { Button } from '@/common/components/button';
import { Links } from '@/common/constants/links';
import { cn } from '@/common/functions/cn';

interface TrialDemoCtaPairProps {
  className?: string;
  trialButtonClassName?: string;
  demoButtonClassName?: string;
}

export const TrialDemoCtaPair = ({
  className,
  trialButtonClassName,
  demoButtonClassName,
}: TrialDemoCtaPairProps) => (
  <div className={cn('flex flex-col gap-3 sm:flex-row', className)}>
    <Button className={trialButtonClassName} href={Links.SignUp}>
      Start your 7-day free trial
    </Button>
    <Button
      className={demoButtonClassName}
      href="/book-demo"
      variant="secondary"
    >
      Book a demo
    </Button>
  </div>
);
