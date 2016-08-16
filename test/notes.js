//As a cell 
var vows = require('vows'),
    assert = require('assert')

/* Executive Summary
    Description of a system for automous decentralized computation
    using a Goal based Coopetition approach.
    Time is used to measure goal success and effectiveness
    NRG is a base token with an actual cost.
    This system will promote the discovery of optimal IoT function through
    evaluation of waste, previous experiences, evolution.
    Massively Asynchronous by design, effeciency will emerge. 
    System should both self heal and handle the introduction of new abilities autonomously.
    
    The concept of a Cell is introduced to represent the current computation incarnation of 
    a connected device's experinces, authority and abilities. 
    
    Young cells will have smaler amounts of NRG and might not be able to directly meet
    an executive goal without the cooperation of other cells. Cooperation stregthens bonds
    between cells and rewards this behavior. 
    
    System will be realized using smart contract and distributed ledger technology.
    
    System might be resiliant to attack through the ability to attack other cells.
    
    BDD will be used to develop the described system in a way that emulates the evolution 
    of life from a single cell onward.
    
*/

/* Legend 
    Keyword: Contract |Concrete entity|
    [Keyword]: Ethereal personal short term storage of experience. |Storage|
    {Keyword}: Ephemeral storage or calculation |In-Memory|
/*

/* Entities 
    Cell    
    Goal
    Reward
    Desire
    Abilities
    Energy
    Authority
    Factory
    [Bond]
    [Cluster]
    {Potential}
/*

/* Facts
    Cells are agents
    Cells can die
        |If a cell runs out of NRG|
        |If a cell's age expires|
        |If a cell is attacked|
        |Dead cells respawn|
        |Dead cells inherit experiences|
    
    Cells have authority (maybe authority is current reward balance)
        |Brain cells have executive authority|
            |NRG enough to incentivise coopetition|
        |Unbound cells have enough NRG to interact with other|
    [Clusters] are emergent relationships based upon experiences
    Systems are defined relationships with defined bonds
    Cells have desires
        Basic:
            Survival
            Short Term Memory (keeping recent experiences at the edge)
            Long Term Memory ()
        Aspirational:
            Cells can aspire to achieve desires (experiments)          
            
    Cells manage their own short term memory (via rewards)
    Cells have abilities (networking, cpu, sensing)
    Cells have specialties (self designated scoring of abilities)
    Cells can share [Bonds] by defining a cost
        |If I share my experiences at x cost it will increase posibility of being 
        chosen by other cells to cooperate in a goal|    
    Cells issue Goal requests based on their desires
    Goals have a state |Met / Unmet|
    Goals include n rewards of m types
    Goals may reference a larger goal
        |Executive: How hot is it outside|
        |Unbound: relay temperature|
    Goals have a cost to meet and a reward
*/



/* References
    https://en.wikipedia.org/wiki/Coopetition
    https://books.google.com/books?id=a9xJg9efi98C&printsec=frontcover
    https://books.google.com/books?id=QJA3dM8Uix0C&printsec=frontcover
*/

