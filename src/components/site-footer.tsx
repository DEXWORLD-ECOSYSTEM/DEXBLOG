
import Link from "next/link";
import packageJson from "../../package.json";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const version = packageJson.version;

  return (
    <footer className="border-t bg-background">
      {/* Adicionado `relative` para servir de referência ao elemento absoluto */}
      <div className="container relative mx-auto px-4 py-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center">
          
          {/* 1. Nome do Blog (Alinhado à Esquerda no Desktop) */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="font-headline text-xl font-bold">
              DEX World
            </Link>
          </div>

          {/* 2. Aviso de Direitos Autorais (Centralizado no Desktop) */}
          <div className="mb-4 text-center md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} All rights reserved
            </p>
          </div>
          
          {/* 3. Versão do Aplicativo (Alinhado à Direita no Desktop) */}
          <div>
            <p className="text-sm text-muted-foreground">
              v{version}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
