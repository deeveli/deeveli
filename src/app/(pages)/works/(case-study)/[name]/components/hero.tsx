// Components/little-fingers/stats-pick.tsx
import Balancer from "react-wrap-balancer";
import { FallbackImage } from "@/components/ui/fallback";
import { cn } from "@/lib/utils";
import { clientsData } from "@/data/app/globals";
import Link from "next/link";
import { ClientInfoProps } from "@/data/app/interface";
import { clients } from "@/data/app/content/clients";

export const Hero: React.FC<ClientInfoProps> = ({ client }) => {
  const clientID = client.id;
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
          "md:pt-32",
          "lg:pt-40",
          "xl:pt-40"
        )}
      >
        <div
          className={cn(
            "flex h-full w-full flex-col items-left justify-left space-y-6 py-6",
            "sm:gap-y-3",
            "md:gap-y-5",
            "lg:gap-y-6",
            "xl:gap-y-10"
          )}
        >
          <div
            className={cn(
              "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400",
              "bg-clip-text text-left tracking-tight text-transparent drop-shadow-sm",
              "w-full leading-relaxed font-black text-7xl",
              "dark:from-gray-100 dark:to-gray-800",
              "sm:text-4xl",
              "md:text-7xl",
              "lg:text-7xl",
              "xl:text-9xl",
              "sm:w-full",
              "md:w-full",
              "lg:w-4/5 lg:my-6 lg:mb-5",
              "xl:w-4/5 xl:my-10 xl:mb-5"
            )}
          >
            <p className={cn("sm:leading-normal md:leading-relaxed")}>
              <Balancer>{client.name}</Balancer>
            </p>
          </div>
          <div
            className={cn(
              "flex justify-start text-left flex-wrap sm:w-full md:w-full lg:w-[70%] xl:w-[70%]"
            )}
          >
            <div
              className={cn(
                "",
                "sm:text-xl",
                "md:text-2xl",
                "lg:text-3xl",
                "xl:text-5xl"
              )}
            >
              <p className={cn("sm:leading-normal md:leading-relaxed")}>
                {client.descA}
              </p>
            </div>
          </div>
          <FallbackImage
            videoSrc={client.video}
            imageSrc={client.image}
            alt={client.alt}
            width={1920}
            height={100}
          />
          <div className={cn("flex flex-row justify-between w-full flex-wrap")}>
            <div
              className={cn(
                "flex flex-col  whitespace-pre-line text-left",
                "sm:w-full",
                "md:w-6/12",
                "lg:w-6/12",
                "xl:w-6/12",
                "sm:text-base",
                "md:text-xl",
                "lg:text-2xl",
                "xl:text-4xl"
              )}
            >
              <div className={cn("sm:pb-4 md:pb-6 lg:p b-8")}>
                <Balancer>{client.descB}</Balancer>
              </div>
              <div>
                <Balancer>{client.descC}</Balancer>
              </div>
            </div>
            <div
              className={cn(
                "flex font-bold flex-col whitespace-pre-line text-left",
                "sm:w-full sm:pt-4 md:pt-0",
                "md:w-3/12",
                "lg:w-3/12",
                "xl:w-3/12",
                "sm:text-sm",
                "md:text-lg",
                "lg:text-lg",
                "xl:text-2xl",
                "sm:gap-y-4 md:gap-y-6 lg:gap-y-8 "
              )}
            >
              {clients
                .filter((client) => client.id === clientID)
                .map((filteredClient, index) => (
                  <div key={index} className="flex flex-wrap">
                    <ul>
                      {filteredClient.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>{service}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              <p
                className={cn(
                  "leading-snug mb-3 font-normal text-3xl underline underline-offset-8",
                  "sm:text-sm",
                  "md:text-base",
                  "lg:text-lg",
                  "xl:text-2xl"
                )}
              >
                {client.link && (
                  <Link href={client.link}>
                    <Balancer>{client.link}</Balancer>
                  </Link>
                )}
              </p>
            </div>
          </div>
          <div className={cn("flex w-full gap-4 flex-row flex-wrap")}>
            <div className={cn("sm:w-full md:w-8/12")}>
              <FallbackImage
                videoSrc=""
                imageSrc={client.imageA}
                alt={client.alt1a}
                width={1920}
                height={1000}
              />
            </div>
            <div className={cn("sm:w-full md:w-3/12")}>
              <FallbackImage
                videoSrc=""
                imageSrc={client.imageB}
                alt={client.alt1b}
                width={1920}
                height={1000}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
