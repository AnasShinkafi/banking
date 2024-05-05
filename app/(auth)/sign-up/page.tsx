import AuthForm from '@/components/AuthForm'
import React from 'react'

const SingUp = () => {
  return (
    <div>
      <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type='sign-up' />
    </section>
    </div>
  )
}

export default SingUp