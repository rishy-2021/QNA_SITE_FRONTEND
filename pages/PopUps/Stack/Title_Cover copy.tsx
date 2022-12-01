import React, { useEffect, useState } from 'react';



interface TitleCoverProps {
  trigger: Boolean
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>
}

function TitleCoverPopUp({ trigger, setTrigger }: TitleCoverProps) {



const[title,settitle]=useState({title:""});
  

  const [selectedFile, setSelectedFile] = useState<any>()
  const [preview, setPreview] = useState()

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    let objectUrl: any
    objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])
  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
      }
  
      // I've kept this example simple by using the first image instead of multiple
  
      setSelectedFile(e.target.files[0]);                   
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target as HTMLInputElement
        const { value } = e.target as HTMLInputElement;
        settitle({ ...title, [name]: value });
      };
  return (trigger) ? (
    <main className="z-30 fixed inset-0 w-full flex justify-center items-center">
      <section className="flex bg-black w-full bg-opacity-20 justify-center items-center h-screen text-black">
        <div className="z-40 relative bg-white h-[550px] w-6/12 rounded-lg ">
          {/* top */}
          <div className="flex p-2 justify-between ml-4">
            <h1 className="text-3xl ml-4 mt-4 font-semibold mb-2">Title Cover</h1>
          </div>
          <div className='px-12'>
            <h1>Title</h1>
            <input type="text" className='w-full p-2 border border-gray-400 rounded-lg' name="title" onChange={handleChange} />
            <h1 className='mt-4 mb-2'>Cover Photo</h1>
            <div className='w-full h-[200px]  border border-gray-400 border-dotted '>
          <img className="object-cover w-full h-full  " src={preview} />
          </div>
          <input
            type="file"
            className="hidden"
            id="choose"
            onChange={(e)=>{onSelectFile(e);}}
          />
          <label htmlFor="choose" >
            <span className="cursor-pointer inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out translate-x-60 mt-4">Select File</span>
          </label>
          <div className='flex  w-full absolute bottom-4 left-0 py-2 px-6 '>
              <button className='bg-gray-100 px-4 py-2 rounded-lg text-md hover:bg-gray-300 hover:text-gray-800' onClick={() => setTrigger(false)}>Cancel</button>
              <button className='bg-blue-400 px-4 py-2 rounded-lg text-white ml-10 text-md hover:text-white hover:bg-blue-500' >Apply</button>
            </div>
        </div>
        </div>
      </section>
    </main>) : null;
}


export default TitleCoverPopUp