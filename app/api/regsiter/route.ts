import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from 'bcrypt'

const schema = z.object({
    email:z.string().email(),
    password:z.string().min(5)
})


export async function POST(request:NextRequest){
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success)return NextResponse.json(
        {error:validation.error.errors},
        {status:400}
    )
    const user = await prisma.user.findUnique({
        where:{email:body.email}
    })
    if(user)return NextResponse.json(
        {error:"user already exist"},
        {status:400}
    )

    const hashedPasword=await bcrypt.hash(body.password,10);
    const newuser= await prisma.user.create({
       data:{email:body.email,
        hashedPasword}
    })

    return NextResponse.json({email:body.email})

}