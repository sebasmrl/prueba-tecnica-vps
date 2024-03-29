import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const TankStackProvider = ({ children }: React.PropsWithChildren) => {

    const client = new QueryClient({
        defaultOptions:{
            queries:{
              refetchOnWindowFocus: false
            }
        }
    });

  return (
    <QueryClientProvider client={client} >
        { children }
        <ReactQueryDevtools  initialIsOpen={false} />
    </QueryClientProvider>
  )
}
