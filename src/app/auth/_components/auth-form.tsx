 'use client'

 import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
 import { Label } from "@/components/ui/label"
 import { Input } from "@/components/ui/input"
 import { Button } from "@/components/ui/button"
 import { useForm } from "react-hook-form"
 import { signIn } from "next-auth/react"


 export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log(data)
    await signIn('email', { email: data.email })
  })

   return (
     <main className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
       <Card className="w-full max-w-md">
         <CardHeader className="space-y-1 text-center">
           <CardTitle className="text-2xl font-bold">Magic Link Login</CardTitle>
           <CardDescription>Enter your email below to receive a magic link to log in.</CardDescription>
         </CardHeader>
         <CardContent>
           <form onSubmit={handleSubmit} className="space-y-4">
             <div>
               <Label className="sr-only" htmlFor="email">
                 Email
               </Label>
               <Input id="email" placeholder="m@example.com" required type="email" {... form.register('email')} />
             </div>
             <Button className="w-full" type="submit">
               Send Magic Link
             </Button>
           </form>
         </CardContent>
       </Card>
     </main>
   )
 }