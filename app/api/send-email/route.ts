import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeEmail,{NetlifyWelcomeEmailProps} from "@/emails/Welcometemplate";


const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request:NextRequest){
    await resend.emails.send({
        from:'mojirao770@gmail.com',
        to:'manoj@terradx.ai',
        subject:'I am testing react-emails with resend',
        react:WelcomeEmail({} as NetlifyWelcomeEmailProps)
    })

    return NextResponse.json({})
}