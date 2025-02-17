import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { authformSchema } from '@/lib/utils'
import { z } from 'zod'


const formSchema = authformSchema('sign-up');

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name:  FieldPath<z.infer<typeof formSchema>>,    /*'email' | 'password'*/
    label:string,
    placeholder:string
}

const CustomInput = ({control,name,label,placeholder} : CustomInput) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
    <div className='form-item'>
        <FormLabel>
          {label}
        </FormLabel>
        <div className='flex w-full flex-col'>
          <FormControl>
            <Input placeholder={placeholder} className='input-class' type={name === 'password' ? 'password' : 'text'} {...field}>
            </Input>
          </FormControl>
          <FormMessage className='form-message mt-2' />

        </div>
    </div>
    )}
  />
  )
}

export default CustomInput
