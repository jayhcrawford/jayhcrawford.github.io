import { github, instagram, linkedin, tiktok } from "../../linkbase";
import { artist_name, heroFont, opacity_var, tertiaryFont } from "../styles";

interface Footer__Props {
  path: string;
}

const Footer = (props: Footer__Props) => {
  const this_year = new Date().getFullYear();


  if (props.path == "/") {
    return (
      <footer style={{ fontFamily: heroFont }} className="">

      </footer>
    )
  } else {
    return (
      <footer style={{ fontFamily: heroFont }} className={` text-white mx-auto w-full p-4 py-6`}>
        <style>
                {`
            .footer_links {
              margin-bottom: 2em;
            }
            .footer_links li {
              margin-bottom: .2em;
            }
            .footer_linkes_transp {
            opacity: ${opacity_var}%;
            }
            
            .footer_links li:hover {
            text-decoration: underline;
            opacity: 100%;
            }`}
              </style>
        <div id="footer_content">
          <div className="md:flex md:justify-between">
            <div className="">
              
              <ul className="footer_links text-md text-left">

                <li>
                  <a href="mailto:jayhcrawford@gmail.com">
                    <p className="font-bold">{artist_name}</p>
                    <span className="footer_linkes_transp font-normal" style={{ fontFamily: tertiaryFont }}>
                      <p>Los Angeles, CA</p>
                      <p>jayhcrawford@gmail.com</p>
                    </span>
                  </a>
                </li>

              </ul>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 text-left">

              <div>
                <h2 className="text-sm font-bold uppercase">Social</h2>
                <ul id="footer_social" style={{ fontFamily: tertiaryFont }} className="footer_links footer_linkes_transp font-medium mt-3 mb-10">
                  <style>
                    {`
                      #footer_social li {
                        
                      }
                    `}
                  </style>
                  <li>
                    <a href={linkedin} target="new" className="hover:underline">LinkedIn</a>
                  </li>
                  <li className="">
                    <a href={instagram} target="new" className="hover:underline">Instagram</a>
                  </li>
                  {/* <li>
                    <a href={tiktok} target="new" className="hover:underline">TikTok</a>
                  </li> */}
                  <li>
                    <a href={github} target="new" className="hover:underline">Github</a>
                  </li>
                </ul>
              </div>
              <div>

              </div>
            </div>
          </div>
          <div className="sm:flex sm:items-center sm:justify-between">
            <span style={{ fontFamily: tertiaryFont }} className={`font-normal text-sm text-white opacity-${opacity_var} sm:text-center`}>{this_year} - {artist_name}
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">



              <a href={github} target="new" className={`opacity-${opacity_var} hover:opacity-100 hover:white ms-5`}>
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>

            </div>
          </div>
        </div>
      </footer>

    )
  }
}

export default Footer
