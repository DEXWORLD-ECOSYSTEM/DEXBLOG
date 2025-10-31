import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="font-headline text-xl font-bold">
              Blogwise
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Blogwise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
