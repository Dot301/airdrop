import React, { useEffect, useState } from 'react'
import accounts from '../resources/whitelistedAccounts.json'
import { MerkleTree } from 'merkletreejs';
import { saveAs } from 'file-saver'

const { keccak256 } = require('eth-lib/lib/hash');
global.Buffer = require('buffer').Buffer;

function MerkleRootComponet(props) {

  const [inputValue, setInputValue] = useState('')
  const [merkleRootForJson, setMerkleRootForJson] = useState('')
  const [merkleProofForJson, setMerkleProofForJson] = useState([])
  const [jsonFile, setJsonFile] = useState(null);
  const [jsonData, setJsonData] = useState(null);
  
  
  useEffect(() => {
    // console.log( props.address)
  }, [])

  function handleFileChange(event) {
    setJsonFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!jsonFile) { return }
    const reader = new FileReader();
    reader.readAsText(jsonFile)
    reader.onload = async function () {
      const data = await JSON.parse(reader.result)
      setJsonData(data)
    }
    console.log(jsonData)
    createMerkleRootFromJson();
  }

  async function createMerkleRootFromJson() {
    const leaves = (jsonData.whitelistedAccounts).map((s) => keccak256(s))
    const tree = new MerkleTree(leaves, keccak256, { sortPairs: true })
    const merkleRootForJson = tree.getHexRoot();
    setMerkleRootForJson(merkleRootForJson);
    let proofs = new Set();
    for(let i=0;i<(jsonData.whitelistedAccounts).length;i++){
      const proof = tree.getHexProof(keccak256(jsonData.whitelistedAccounts[i]))
      proofs.add(proof)
      // console.log(proof)
    }
    setMerkleProofForJson(Array.from(proofs))
    console.log(Array.from(proofs))
  }
  
  function downloadSample() {
    const file = new Blob([JSON.stringify(accounts)], {
      type: 'json'
    })
    saveAs(file, 'sample-json-file.json')
  }

  function downloadProof() {
    if (jsonData != null) {
      const proof = new Blob([JSON.stringify(merkleProofForJson)], {
        type: 'application/json'
      })
      saveAs(proof, 'merkle-proof.json')
    }
  }



  return (
    <>
      <div>
        {/* <div className='h-20 mt-10 flex flex-row justify-center items-center text-white'>
          <input type='radio' value='Text Area' className='text-white'/>
          <input type='radio' value='Json' className='text-white'/>
        </div> */}
        <form onSubmit={handleSubmit}>
          <div className='h-20 m-10 flex flex-row justify-center items-center text-white'>
            Upload JSON file  :
            <button className='h-10 w-[12%] ml-10 border text-white rounded-md flex items-center justify-center hover:bg-red-700' id='button' type='submit' onClick={downloadSample}>Download Sample File</button>
            <input type="file" accept=".json" onChange={handleFileChange} className='h-10 text-white flex justify-center items-center m-20 border border-solid border-gray-300 rounded' />
            <button className='h-10 w-[15%] border text-white rounded-md flex items-center justify-center hover:bg-[#060869]' id='button' type='submit'>Get Your Merkle Root</button>
          </div>
        </form>

        <div className='genratedmerkleroot mt-20 mb-5 ml-[43%] border rounded-xl text-white text-3xl font-extrabold h-14 w-[15%] flex justify-center items-center bg-sky-800'>Merkle Root</div>

        <div className='genratedmerkleroot w-[30%] mb-2 ml-[35%] border rounded-lg text-white h-10 flex justify-center items-center bg-opacity-50'>{merkleRootForJson}</div>

        <div className='proof mt-20 mb-5 flex flex-row justify-center items-center space-x-5'>
          <div className='genratedmerkleproof border rounded-xl text-white text-3xl font-extrabold h-14 w-[15%] flex justify-center items-center bg-sky-800'>
            Merkle Proofs </div>
          <button className='h-10 w-[13%] border text-white rounded-md flex items-center justify-center hover:bg-red-700' id='button' type='submit' onClick={downloadProof}>Download Merkle Proof</button>
        </div>
        <div className='genratedmerkleproof w-[30%] mb-2 ml-[35%] border rounded-lg text-white flex flex-col justify-center items-center'>
          {
            merkleProofForJson.map((mp, index) => {
              return (<div key={index} className=' m-5 w-full  flex justify-center items-center '>{mp}</div>)
            })
          }
        </div>
      </div>
    </>
  )
}

export default MerkleRootComponet