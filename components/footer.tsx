export default function Footer() {
  return (
    <footer className='py-6 md:px-8 md:py-0 fixed bottom-0 w-full'>
      <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
        <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
          Built by
          <a
            href='https://twitter.com/shadcn'
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            Pushkaraj
          </a>
          . The source code is available on
          <a
            href='https://github.com/shadcn-ui/ui'
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
