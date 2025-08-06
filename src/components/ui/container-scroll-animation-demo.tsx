import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function ContainerScrollAnimationDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-foreground">
              Transform your marketing with <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-gradient-primary">
                AI-Powered Automation
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=720&fit=crop"
          alt="AI Marketing Dashboard"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
} 