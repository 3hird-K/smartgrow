import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function SSOCallbackPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="relative flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 shadow-lg shadow-emerald-500/25">
          <div className="size-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
        <div className="space-y-1">
          <h2 className="text-base font-bold text-foreground">Completing sign in...</h2>
          <p className="text-xs text-muted-foreground">Connecting your Google account with SmartGrow.</p>
        </div>
      </div>
      <AuthenticateWithRedirectCallback
        signInForceRedirectUrl="/dashboard"
        signUpForceRedirectUrl="/dashboard"
      />
    </div>
  );
}
