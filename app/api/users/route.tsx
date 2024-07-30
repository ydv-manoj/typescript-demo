import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
export async function GET(request:NextRequest){
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}

export async function POST(request:NextRequest){
    const body = await request.json();
    const user = await prisma.user.findUnique({
        where:{email:body.email}
    })
    if(user)return NextResponse.json({error:'user already exits'},{status:400});
    const newuser = await prisma.user.create({
        data:{
            name:body.name,
            email:body.email
        }
    })
    if(!body.name)return NextResponse.json({error:'name is required'},{status:400});
    return NextResponse.json(newuser,{status:201})
}