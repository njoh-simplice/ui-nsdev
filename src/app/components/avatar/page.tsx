import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import AvatarDemo from "@content/components/avatar/demo";
import { meta } from "@content/components/avatar/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="An avatar stands for a person. It shows an image, falls back to initials when the image can't load, comes in three sizes, and can overlap with others in a group."
      demo={<AvatarDemo />}
      demoPath="content/components/avatar/demo.tsx"
      sourcePath="src/components/ui/avatar.tsx"
      props={[
        {
          name: "size",
          type: "sm | md | lg",
          default: "md",
          description:
            "The diameter: 32, 48 or 56px. On AvatarGroup it sets the size of every avatar inside.",
        },
        {
          name: "src",
          type: "string",
          description: "On AvatarImage. The picture to show.",
        },
        {
          name: "alt",
          type: "string",
          description:
            "On AvatarImage. The person's name, or an empty string when the name is written next to the avatar.",
        },
        {
          name: "children",
          type: "node",
          description: "On AvatarFallback. What to show when there is no image, usually initials.",
        },
        {
          name: "className",
          type: "string",
          description: "Extra classes. The demo puts one on the image to crop in on the face.",
        },
      ]}
      propsNote="Avatar, AvatarImage and AvatarFallback pass every other prop to the matching Base UI part. AvatarGroup is a plain div."
      thinking={{
        intro:
          "An avatar is recognition at a glance, so something has to show at every moment: the image when it is ready, the initials when it is not.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "The image is only drawn once it has loaded, and the fallback takes over if it fails, so a broken-image icon never appears.",
          },
          {
            label: "Crop to the face:",
            text: "A square photo shows shoulders in a small circle. The demo scales the photo up around the face with a class on the image.",
          },
          {
            label: "Groups have an order:",
            text: "The first avatar is in front and each later one tucks behind it, the way the home page shows the two of us.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Sizes:",
            text: "32, 48 and 56px circles. The border is 2px, or 3px at the large size, in the main text color.",
          },
          {
            label: "Overlap in a group:",
            text: "Each avatar sits behind the one before it by about 70% of its width: 20, 32 or 40px.",
          },
          { label: "Fallback:", text: "Initials in 14px semibold on the surface color." },
          { label: "Image:", text: "Fills the circle and is cropped to fit." },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "No hover or press:",
            text: "An avatar is not a control. To make one open a profile, wrap it in a link or a button, and that element gets the focus ring.",
          },
          {
            label: "Loading and failure:",
            text: "While the image loads, and if it never does, the fallback is shown. The third avatar in the demo points at a missing file to show it.",
          },
          {
            label: "Stacking order:",
            text: "In a group the first child is always on top, however many avatars there are.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Say who it is:",
            text: "Give each image an alt with the person's name, and label a group too, as the demo does.",
          },
          {
            label: "Don't say it twice:",
            text: 'If the name is written next to the avatar, use alt="" so a screen reader doesn\'t read it again. The two avatars inside the group do this, because the group is already labelled.',
          },
          {
            label: "Never only a photo:",
            text: "Fallback initials mean the person is still identified when the image is slow or missing. They have 14.2:1 contrast on the surface color.",
          },
        ],
      }}
    />
  );
}
