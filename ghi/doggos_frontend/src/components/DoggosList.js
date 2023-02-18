import React, {useState, useEffect} from 'react';


function DoggosList() {
    const [doggos, setDoggos] = useState([]);
    const [doggoPix, setDoggoPix] = useState([]);

    useEffect(() => {
        const getDoggoData = async () => {
            const doggoResponse = await fetch("http://localhost:8000/dogs/");
            const doggoData = await doggoResponse.json();
            console.log("dog list response from local", doggoData);
            const dogPictureURL = `https://dog.ceo/api/breeds/image/random/${doggoData.length}`
            console.log(dogPictureURL);
            const doggoPixResponse = await fetch(dogPictureURL)
            const doggoPixData = await doggoPixResponse.json();
            setDoggos(doggoData);
            setDoggoPix(doggoPixData.message);
            console.log("doggoPix", doggoPixData.message);
        };
        getDoggoData();
    }, []);

    async function handleDelete(id) {
        const doggosUrl = `http://localhost:8000/dogs/${id}`;
        const fetchConfig = {
            method: "delete",
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const doggoResponse = await fetch(doggosUrl, fetchConfig);
        if (doggoResponse.ok) {
            setDoggos(doggos.filter(doggo => doggo.id !== id))
        }
        else {
            throw new Error ("Error");
        }
        this.forceUpdate()
    };

    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Doggo List</h1>
              <table className="table table-striped">
                  <thead>
                  <tr>
                      <th>Name</th>
                      <th>Species</th>
                      <th>Sex</th>
                      <th>Status</th>
                      <th>Age</th>
                      <th>Intake Date</th>
                      <th>Picture</th>
                  </tr>
                  </thead>
                  <tbody>
                      {doggos.map((species, i) => {
                          return(
                              <tr key={species.id}>
                                  <td>{species.name}</td>
                                  <td>{species.species}</td>
                                  <td>{species.sex}</td>
                                  <td>{species.status}</td>
                                  <td>{species.age}</td>
                                  <td>{species.intake_date}</td>
                                  <td><div><img src={doggoPix[i]}></img></div></td>
                                  <td><button className="btn btn-danger" onClick={() => handleDelete(species.id)}>Delete</button></td>
                              </tr>
                          );
                      })}
                  </tbody>
              </table>
              </div>
          </div>
      </div>
      );
                  }

export default DoggosList;
