import AuthForm from '@/components/AuthForm'

const SingUp = async () => {
  return (
    <div>
      <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type='sign-up' />
    </section>
    </div>
  )
}

export default SingUp