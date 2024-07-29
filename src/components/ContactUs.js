import React, { useEffect } from "react"

const ContactUs = () => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Hello");
        }, 1000)

        return () => {
            clearInterval(timer)
            console.log("clean up")
        }


    }, [])
    return (
        <div>Contact us </div>
    )
}

export default ContactUs