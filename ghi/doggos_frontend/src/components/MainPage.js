import React, {useEffect, useState} from 'react'


function MainPage() {

  const [volunteers, setVolunteer] = useState([])

  async function getVolunteers() {
    let volunteersUrl = "http://localhost:8000/volunteers/"
    try {
      const response = await fetch(volunteersUrl)
      const listVolunteers = await response.json()
      setVolunteer(listVolunteers)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(
    () => {
      getVolunteers()
    }, []
  )

  return (
    <div>
      <p>{volunteers.map(volunteer => {
        return <div>{volunteer.volunteer_name}</div>
      })}</p>
    </div>
  )
}

export default MainPage
