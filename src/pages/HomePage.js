import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchSongs } from "../store/actions";

export default function Home () {
  // const songs = useSelector((state) => state.songs.songs)
  // const dispatch = useDispatch()
  const [localState, setLocalState] = useState('')

  // useEffect(() => {
  //   dispatch(fetchSongs())
  // }, [dispatch])

  return (
    <>
    <h1>Haii</h1>
    </>
  )
}