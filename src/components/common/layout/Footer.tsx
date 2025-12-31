import { EnjuConfig } from '@/enju.config'
import SocialMediaLinks from './SocialMediaLinks'

const Footer = () => {
  return (
    <footer className="mb-2 mt-10 w-full">
      <div className="mx-auto max-w-7xl px-4 py-4 text-center space-y-2 text-base">
        <SocialMediaLinks />
        <p className="text-gray-dark">
          {`© ${new Date().getFullYear()} ${EnjuConfig.author} | All rights reserved.`}
        </p>
        <p className="text-gray-dark">
          {/* Please leave this theme credit intact. Really appreciate it! */}
          Themed by
          {' '}
          <a
            href="https://enju.zla.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hover-primary underline-interactive"
          >
            EnjuFolio
          </a>
          {' '}
          · Crafted by
          {' '}
          <a
            href="https://elaraliu.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hover-primary underline-interactive"
          >
            Elara Liu
          </a>
          {' '}
          · Modified by
          {' '}
          <a
            href="https://www.donnyguo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hover-primary underline-interactive"
          >
            Donny Guo
          </a>
        </p>
        <p>
          <a
            href="https://www.gnu.org/licenses/agpl-3.0.en.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hover-primary underline-interactive"
          >
            AGPL v3
          </a>
          {' '}
          {' '}
          ·
          {' '}
          <a
            href="https://github.com/Donny-Guo/Donny_Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hover-primary underline-interactive"
          >
            Source Code
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
