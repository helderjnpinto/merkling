// import RLP from 'rlp';
import { SecureTrie, LevelDB } from '@ethereumjs/trie'
import { Level } from 'level'
// import { Account, bufferToHex } from '@ethereumjs/util'
// import RLP from 'rlp'

const trie = new SecureTrie({ db: new LevelDB(new Level('MY_TRIE_DB_LOCATION')) })

export async function main() {
  await trie.put(Buffer.from('test'), Buffer.from('one'))
  const proof = await SecureTrie.createProof(trie, Buffer.from('test'))
  const value = await SecureTrie.verifyProof(trie.root, Buffer.from('test'), proof)
  console.log(value.toString())
}

main()
