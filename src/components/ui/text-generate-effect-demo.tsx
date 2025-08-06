import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Transform your marketing with AI-powered automation that understands your audience, generates personalized content, and optimizes campaigns in real-time. Experience unprecedented growth with intelligent insights that drive conversions and maximize ROI.`;

export default function TextGenerateEffectDemo() {
  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <TextGenerateEffect words={words} />
    </div>
  );
} 