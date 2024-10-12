import Link from "next/link"
export default function Navbar() {
    return (
        <div>
            <Link href="/home">Home</Link><br/><br/>
            <Link href="/product">Product</Link><br/><br/>
            <Link href="/contact">Contact</Link><br/><br/>
            <Link href="/about">About</Link><br/><br/>
            <Link href="/about/management">Management</Link>
        </div>
    )
}