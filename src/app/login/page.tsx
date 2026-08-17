import { AuthTelemetryShowcase } from "@/components/auth/auth-telemetry-showcase";
import { GoogleSignInPanel } from "@/components/auth/google-sign-in-panel";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
  title: "Sign In — SmartGrow",
  description: "Sign in to your SmartGrow account to access greenhouse automation, live sensor telemetry, and batch cultivation analytics.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] bg-background">
      
      {/* Left Visual Area (Desktop Full-Bleed Showcase) */}
      <section
        aria-label="SmartGrow Greenhouse Telemetry Visual"
        className="hidden lg:flex flex-col h-full min-h-screen"
      >
        <AuthTelemetryShowcase />
      </section>

      {/* Right Authentication Area */}
      <section
        aria-label="Account Sign In Form"
        className="relative flex min-h-screen flex-col items-center justify-center p-6 sm:p-10 lg:p-14"
      >
        {/* Top Right Theme Toggle */}
        <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20">
          <ThemeToggle className="size-8" />
        </div>

        {/* Google Authentication Panel */}
        <GoogleSignInPanel />
      </section>

    </main>
  );
}
