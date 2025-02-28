import satori from "satori";
import { Resvg } from "@cf-wasm/resvg";
import { readFileSync } from "node:fs";

type OgImage = {
  imageBuffer: Buffer;
  title: string;
};

export async function generateOgImage({ imageBuffer, title }: OgImage) {
  const imageBase64 = `data:image/png;base64,${imageBuffer.toString("base64")}`;

  const font = readFileSync("src/utils/MonaspaceArgon-Bold.woff");

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: 1200,
          height: 630,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10rem",
          textWrap: "balance",
          color: "black",
          backgroundColor: "rgb(237, 242, 255)",
          backgroundImage:
            "linear-gradient(100deg, #F2F2F3 0%, #F2F2F3 40%, #DDECEE 100%)",
          fontSize: 72,
          fontWeight: "black",
          padding: "60px",
          textAlign: "center"
        },
        children: [
          {
            type: "span",
            props: {
              style: {
                maxWidth: "50%"
              },
              children: title
            }
          },
          {
            type: "img",
            props: {
              src: imageBase64,
              width: 360,
              height: 360,
              style: {
                boxShadow:
                  "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02), 0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09)",
                borderRadius: "1rem",
                objectFit: "contain"
              }
            }
          }
        ]
      }
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: font,
          weight: 400,
          style: "normal"
        }
      ]
    }
  );

  const resvg = new Resvg(svg);
  const pngBuffer = resvg.render().asPng();

  return pngBuffer;
}
