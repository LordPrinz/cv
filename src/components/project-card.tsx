import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { LinkIcon } from "./icons";
import { prettyUrl } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  extraLinks?: readonly { label: string; href: string }[];
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  extraLinks,
}: Props) {
  return (
    <Card className="border-muted flex flex-col overflow-hidden border p-3 print:p-2">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <LinkIcon className="size-4 -translate-y-0.5 print:hidden" />
              </a>
            ) : (
              title
            )}
          </CardTitle>
          {link ? (
            <div className="text-muted-foreground hidden truncate text-[10px] print:block">
              {prettyUrl(link)}
            </div>
          ) : null}
          <CardDescription className="text-xs">{description}</CardDescription>
          {extraLinks?.map((extraLink) => (
            <a
              key={extraLink.href}
              href={extraLink.href}
              target="_blank"
              className="text-muted-foreground block text-xs underline"
            >
              {extraLink.label}
            </a>
          ))}
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
