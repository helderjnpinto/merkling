// import RLP from 'rlp';
import { SecureTrie, LevelDB } from '@ethereumjs/trie'
// import { Account, bufferToHex } from '@ethereumjs/util'
// import RLP from 'rlp'

const trie = new SecureTrie({ db: new LevelDB() })

export async function main() {
  await trie.put(Buffer.from('test'), Buffer.from('one'))
  const proof = await SecureTrie.createProof(trie, Buffer.from('test'))
  const value = await SecureTrie.verifyProof(trie.root, Buffer.from('test'), proof)
  console.log(value.toString())
}

main()
