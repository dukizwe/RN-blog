import { useEffect, useState } from "react"

/**
 * le hook pour récuperer les données lorsque le component monte
 * @param {string} url l'url à appeler (GET)
 * @returns {Array} un tableau contenant [les donnes, le loading, le setDonnes]
 */
export default function useFetch(url) {
          const [state, setState] = useState({
                    loading: true,
                    items: []
          })
          useEffect(() => {
                    (async () => {
                              try {
                                        const response = await fetch(url)
                                        const data = await response.json()
                                        setState({
                                                  loading: false,
                                                  items: data
                                        })
                              } catch (error) {
                                        console.log(error)
                                        setState({
                                                  loading: false,
                                                  items: []
                                        })
                              }
                    })()
          }, [url])
          return [state.loading, state.items, setState]
}