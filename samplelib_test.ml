module Promise = struct
  type 'x t = 'x Js_promise.t
  let return x : _ t = Js_promise.resolve x
  let bind : 'x t -> ('x -> 'y t) -> 'y t = fun m af -> Js_promise.then_ af m
end

module Jest = struct
  type t
  external expect : 'a -> t = "expect" [@@bs.val]
  external to_be : t -> 'a -> unit = "toBe" [@@bs.send]
end

open Jest

open struct
  let flip f x y = f y x
end

module Test = struct
  let test1 () =
    let open Promise in
    return 2
    |> flip bind (fun x -> return (x + 40))
    |> flip bind @@ fun x -> return (to_be (expect x) 42)
    
  let test2 () =
    let module M = Samplelib.MonadOps(Promise) in
    let open M in
    return 2
    >>= fun x -> return (x + 40)
    >>= fun x -> return (to_be (expect x) 42)

  let test3 () =
    let open Samplelib.MonadOps(Promise) in
    return 2
    >>= fun x -> return (x + 40)
    >>= fun x -> return (to_be (expect x) 42)
end
