module MonadOps(M : sig
  type _ t
  val return : 'x -> 'x t
  val bind : 'x t -> ('x -> 'y t) -> 'y t
end) = struct
  let return = M.return
  let (>>=) = M.bind
end
