const {
    getSentenceDifficulty,
    getPassivePhrases,
    getAdverbPhrases,
    getComplexPhrases,
    getQualifiedPhrases,
} = require('./index')

const assert = require('node:assert')
const test = require('node:test')

test('simple sentences are identified', () => {
    assert.strictEqual(
        getSentenceDifficulty('This is a simple sentence')[0].type,
        'simple',
    )
})

test('moderate sentences are identified', () => {
    assert.strictEqual(
        getSentenceDifficulty('This is a complex sentence because it includes longer words of greater complexity')[0].type,
        'moderate',
    )
})

test('complex sentences are identified', () => {
    assert.strictEqual(
        getSentenceDifficulty('This is a complex sentence because it includes longer words of greater complexity, and an altogether unbearable length')[0].type,
        'complex',
    )
})

test('passive phrases are identified', () => {
    assert.strictEqual(
        getPassivePhrases('This sentence was made poorly')[0].type,
        'passive',
    )
})

test('adverb phrases are identified', () => {
    assert.strictEqual(
        getAdverbPhrases('This sentence is literally awful')[0].type,
        'adverb',
    )
})

test('complex phrases are identified', () => {
    assert.strictEqual(
        getComplexPhrases('There are multiple of problems')[0].type,
        'complex',
    )
})

test('qualified phrases are identified', () => {
    assert.strictEqual(
        getQualifiedPhrases('I believe this sucks')[0].type,
        'qualified',
    )
})
