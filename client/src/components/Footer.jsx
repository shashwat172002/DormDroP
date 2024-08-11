import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
export default function FooterCom() {
  const handleDropdownItemClick = (menuItem) => {
    // Handle click on dropdown menu item
    // You can navigate to different pages or perform other actions based on the clicked menu item
    // After handling the click, close the dropdown
    setShowDropdown(false);
   
    // navigate('/about')
  navigate(`/about/${menuItem}`);
};
  return (
<<<<<<< HEAD
    <Footer container className=' bg-gray-800 footer-border'>
=======
    <Footer container className='border border-t-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-10 border-black-500'>
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-gray-300'
            >
              <span className='px-2 py-1 mr-1 span-color rounded-lg bg-gray-400 text-gray-800 font-semibold'>
               Dorm
              </span>
              Drop
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About'  className='text-gray-300'/>
              <Footer.LinkGroup col>
               
                <Footer.Link
<<<<<<< HEAD
                  href={`/about/About Us`}
=======
                  href=''
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300'
                 
                >
                  About Us
                </Footer.Link>
               
                <Footer.Link
                  href={`/about/Our Work`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300'
                >
                  Our Work
                </Footer.Link>
<<<<<<< HEAD
               
                <Footer.Link
                   href={`/about/Sender Perspective`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300'
                >
                  Sender Perspective
                </Footer.Link>
               
                <Footer.Link
                  href={`/about/Receiver Perspective`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300'
=======
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Sender Perspective
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
                >
                  Receiver Perspective
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' className='text-gray-300' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href=''
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#' className='text-gray-300'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' className='text-gray-300' />
              <Footer.LinkGroup col>
                <Footer.Link href='#' className='text-gray-300'>Privacy Policy</Footer.Link>
                <Footer.Link href='#' className='text-gray-300'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="DormDrop"
            year={new Date().getFullYear()}
            className='text-gray-300'
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
<<<<<<< HEAD
            <Footer.Icon href='#' className='text-gray-300' icon={BsFacebook}/>
            <Footer.Icon href='#' className='text-gray-300' icon={BsInstagram}/>
            <Footer.Icon href='#' className='text-gray-300' icon={BsTwitter}/>
            <Footer.Icon href='' className='text-gray-300' icon={BsGithub}/>
            <Footer.Icon href='#' className='text-gray-300' icon={BsDribbble}/>
=======
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='' icon={BsGithub}/>
            <Footer.Icon href='#' icon={BsDribbble}/>
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b

          </div>
        </div>
      </div>
    </Footer>
  );
}