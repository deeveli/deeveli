import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import { FallbackImage } from "@/components/ui/fallback";
import { ClientInfoProps } from "@/data/app/interface";
import Link from "next/link";

interface NextCaseStudyProps {
  client?: ClientInfoProps["client"] | null;
}

export const NextCaseStudy: React.FC<NextCaseStudyProps> = ({ client }) => {
  return (
    <>
      <section
        id="Clients"
        className={cn(
          "space-y-6 ",
          "sm:px-6",
          "md:px-10",
          "lg:px-40",
          "xl:px-80",
          "sm:pt-10",
          "md:pt-20",
          "lg:pt-32",
          "xl:pt-40",
          "sm:pb-5",
          "md:pb-10",
          "lg:pb-16",
          "xl:pb-20"
        )}
      >
        <Link
          href={client?.src || "/works"}
          className={cn(
            "flex h-full w-full flex-col items-left justify-left space-y-6",
            "sm:gap-y-2",
            "md:gap-y-5",
            "lg:gap-y-8",
            "xl:gap-y-10"
          )}
        >
          <div
            className={cn(
              "w-full",
              "sm:text-lg",
              "md:text-xl",
              "lg:text-2xl",
              "xl:text-4xl"
            )}
          >
            <div className={cn("sm:leading-normal md:leading-relaxed")}>
              <Balancer>Next Case Study</Balancer>
            </div>
          </div>
          <div
            className={cn(
              "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 underline-offset-8",
              "bg-clip-text text-left tracking-tight text-transparent drop-shadow-sm",
              "w-full leading-relaxed font-black text-7xl",
              "dark:from-gray-100 dark:to-gray-800",
              "sm:text-4xl",
              "md:text-7xl",
              "lg:text-7xl",
              "xl:text-9xl"
            )}
          >
            <div className={cn("sm:leading-normal md:leading-relaxed")}>
              <Balancer>{client?.name}</Balancer>
            </div>
          </div>
          <div className={cn("flex w-full gap-4 flex-row")}>
            {client && (
              <FallbackImage
                videoSrc={client.video}
                imageSrc={client.image}
                alt={client.alt}
                width={1920}
                height={1000}
              />
            )}
          </div>
        </Link>
      </section>
    </>
  );
};
