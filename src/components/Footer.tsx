const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-foreground font-medium">
          © {currentYear} Vibe <span className="text-primary">X</span> Visuals
        </p>
        <p className="text-muted-foreground mt-2">
          Reelmaker on wheels – we come to you.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
