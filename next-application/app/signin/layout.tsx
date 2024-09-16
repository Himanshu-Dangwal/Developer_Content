export default function ({ children }: { children: React.ReactNode }) {
    return (<>
        <div className="text-center p-2 border-b">
            Signin to write a blog!
        </div>
        {children}
    </>
    )
}