import Image from 'next/image'
import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import ShowUp from '../motion/ShowUp'
import Divider from '../ui/divider'

export default function ContactForm() {
    return (
        <>
            <ShowUp className='h-fit lg:h-[calc(100dvh-6rem)] w-full py-14 lg:py-7 px-7 lg:px-14 rounded-4xl bg-tertiary relative overflow-hidden'>
                <form className='w-full lg:w-2/5 h-full flex flex-col gap-5 justify-center'>
                    <RadioInputs />
                    <InputFields />
                    <Button type="submit" className='h-12 bg-secondary hover:bg-secondary/90 active:bg-secondary/75'>Send Message</Button>
                </form>
                <Image src={"/images/contact-illustration.svg"} alt='Contact Illustration' height={1080} width={1080} className='h-5/6 hidden lg:block absolute top-1/2 -translate-y-1/2 -right-[41.5%]' />
            </ShowUp>
            <Divider />
        </>
    )
}

function RadioInputs() {
    const radioInput = [
        {
            label: "Say Hi",
            id: "say-hi"
        },
        {
            label: "Get Quote",
            id: "get-quote"
        }
    ]

    return (
        <RadioGroup defaultValue="Say Hi" className='flex items-center gap-7'>
            {
                radioInput.map((radio, index) => (
                    <div key={index} className='flex gap-2 items-center'>
                        <RadioGroupItem id={radio.id} value={radio.label} />
                        <Label className='text-lg font-normal' htmlFor={radio.id}>{radio.label}</Label>
                    </div>
                ))
            }
        </RadioGroup>
    )
}

function InputFields() {
    const inputs = [
        {
            id: "name",
            label: "Name",
            type: "text",
            placeholder: "Name"
        },
        {
            id: "email",
            label: "Email",
            type: "email",
            placeholder: "Email"
        }
    ]

    return (
        <>
            {
                inputs.map((input, index) => (
                    <div key={index} className='flex flex-col gap-2'>
                        <Label htmlFor={input.id}>
                            {input.label}
                        </Label>
                        <Input
                            id={input.id}
                            required={true}
                            type={input.type}
                            placeholder={input.placeholder}
                            className='bg-white h-12'
                        />
                    </div>
                ))
            }
            <div className='flex flex-col gap-2 justify-start items-start'>
                <Label htmlFor='message'>
                    Message
                </Label>
                <Textarea className='h-32 bg-white resize-x' id='message' placeholder='Message' />
            </div>
        </>
    )
}