(lang dune 3.9)

(name melange_bug)

(using directory-targets 0.1)
(using melange 0.1)

(generate_opam_files true)

(source
 (github username/reponame))

(authors "Author Name")

(maintainers "Maintainer Name")

(license LICENSE)

(documentation https://url/to/documentation)

(package
 (name melange_bug)
 (synopsis "A short synopsis")
 (description "A longer description")
 (depends
  (ocaml (>= 4.13.0))
  (melange (>= 1.0.0))))

; See the complete stanza docs at https://dune.readthedocs.io/en/stable/dune-files.html#dune-project
