import { forwardRef, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  )
})
// add conditional list for auth status
const links = [
  { href: '/account-settings', label: 'Account' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
]

function nav() {
  
  return (
    <div className="
    flex
    flex-row-reverse
    justify-between 
    bg-gradient-to-r 
    from-oscrayola 
    to-xanadu
    w-100vw
    h-12 
    items-center
    motion-reduce:transition-none motion-reduce:hover:transform-none
    "
    >
      <Menu as="div" className="relative transition-opacity hover:bg-medaquamarine/10 rounded-md">
        <Menu.Button className="px-8 py-2 rounded-full text-white">Menu</Menu.Button>
        <Transition
                enter="transition duration-200 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-150 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                >
          <Menu.Items className="absolute bg-xanadu p-4 rounded-md flex flex-col w-32 shadow-inner shadow-oscrayola">
            {links.map((link) => (
            /* Use the `active` state to conditionally style the active item. */
            <Menu.Item key={link.href}>
              {({ active }) => (
                <MyLink
                  href={link.href}
                  className='gap-1 hover:bg-medaquamarine/10 rounded-md'
                >
                  {link.label}
                </MyLink>
              )}
            </Menu.Item>
          ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>

  )
}

export default nav