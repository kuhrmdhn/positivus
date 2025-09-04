import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function FooterSubscription() {
    return (
        <div className='w-full lg:w-3/5 h-44 px-7 flex gap-2 items-center bg-[#292A32] rounded-xl'>
            <Input type='email' placeholder='Email' className='!border-white selection:bg-transparent selection:underline selection:decoration-white selection:text-white text-white h-1/3 w-1/2' />
            <Button className='h-1/3 w-1/2 text-secondary font-semibold'>Subscribe to news</Button>
        </div>
    )
}
