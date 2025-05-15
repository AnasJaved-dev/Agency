import { workflowSteps } from '@/constants/workflow';

export default function HowItWorks() {
  return (
    <section className="section-wrapper section-spacing bg-muted/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get started with our services in 4 simple steps
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

          {/* Steps */}
          <div className="space-y-12">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step number circle */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-semibold">
                    {step.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-background p-6 rounded-lg shadow-sm border border-border">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 