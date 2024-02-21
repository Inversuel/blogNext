import { Button } from "@/component/ui/button";
import Container from "@/component/ui/container";
import { Typography } from "@/component/ui/typography";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Blog Nextjs</title>
        <meta
          name="description"
          content="Blog created with Dato cms and Nextjs"
        ></meta>
      </Head>
      <section className="flex flex-row justify-between">
        <div className="flex flex-col gap-5 max-w-xl items-start justify-center">
          <div>
            <Typography variant="h1" className="whitespace-nowrap">
              No long-term contracts.
            </Typography>
            <Typography variant="h1">No catches</Typography>
          </div>
          <Typography variant="mutedText">
            Start your 30-day free trial today.
          </Typography>
          <div className="flex flex-row gap-2">
            <Link href="/blog">
              <Button variant="outline">Learn more</Button>
            </Link>
            <Link href="/form">
              <Button>Get started</Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4 justify-center items-end">
            <Image
              src="/static/woman_office.jpeg"
              alt="Woman working office"
              width={160}
              height={160}
              className="col-end-6 row-end-5 h-40 w-40 object-cover"
            />
            <Image
              src="/static/woman_standing.jpeg"
              alt="woman standing with laptop"
              width={160}
              height={240}
            />
          </div>
          <div className="flex flex-row gap-4 justify-center items-start">
            <Image
              src="/static/woman_smiling.png"
              alt="woman smiling"
              width={192}
              height={128}
            />
            <Image
              src="/static/man_outside.jpeg"
              alt="Man siting outside"
              width={160}
              height={240}
            />
            <Image
              src="/static/woman_meeting.jpeg"
              alt="meeting with woman smiling"
              width={192}
              height={128}
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
