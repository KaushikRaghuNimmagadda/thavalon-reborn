package main.kotlin.roles

import main.kotlin.thavalon.Game
import main.kotlin.thavalon.Updater
import main.kotlin.thavalon.UpdaterPriority
import kotlin.random.Random

class Oberon : DefaultEvilRole() {
    override val role = RoleType.Oberon

    private val singleSeenTargets : Set<RoleType> =  setOf(RoleType.Tristan, RoleType.Iseult,
        RoleType.Percival, RoleType.Merlin)

    private val pairSeenTargets : Set<RoleType> = setOf(RoleType.Guinevere, RoleType.Gawain)

    private val rolePresentTargets : Set<RoleType> = setOf(RoleType.Arthur, RoleType.Nimue)

    override fun getUpdaters(g: Game): List<Updater> {
        val updaters : MutableList<Updater> = super.getUpdaters(g).toMutableList()
        updaters.add(getOberonUpdater())
        return updaters
    }

    private fun getOberonUpdater() : Updater {
        // oberon updater must run last
        return Pair({g : Game -> obfuscateInformation(g, getTarget(g))}, UpdaterPriority.One)
    }

    private fun getTarget(g : Game) : Role? {
        val goodTeam : MutableList<Role> = g.getGoodRoles()
        // set of roles oberon can target
        val targetableRoles : Set<RoleType> = singleSeenTargets.plus(pairSeenTargets).plus(rolePresentTargets)

        // get potential targets
        val potentialTargets : List<Role> = goodTeam.filter { it.role in targetableRoles }
        if (potentialTargets.isEmpty()) {
            // no oberonable targets in game
            return null
        }
        return potentialTargets.random()
    }

    /**
     * Takes in a game and a target, and obfuscates a piece of target's information
     */
    private fun obfuscateInformation(g: Game, target : Role?) : Unit {
        // if target is null, then do nothing
        if(target == null) {
            return
        }
        assert(target.role.alignment == Alignment.Good)

        // obfuscate information based on what kind of target we have
        when {
            target.role in singleSeenTargets -> modifySingleInformation(g, target)
            target.role in pairSeenTargets -> {
                // to modify this kind of information we need it to be present in some form
                if(target.information.pairSeen.isEmpty()) {
                    // we just return without oberoning the target
                    return
                }
                modifyPairSeenInformation(target)
            }
            target.role in rolePresentTargets -> modifyRolePresentInformation(target)
        }

        val oberondAlert = ThavalonInformation.AlertInformation("You have been Oberon'd!")
        val successfullyObfuscatedAlert = ThavalonInformation.AlertInformation("You have added false information " +
                "to a member of the good team")
            // add oberon alert to target
        // inform oberon that they've successfully oberoned someone
        // add oberon alert to target
        target.information.add(oberondAlert)
        // inform oberon that they've successfully oberoned someone
        information.add(successfullyObfuscatedAlert)

    }

    /**
     * Helper for adding a false singleSeenInformation to target
     */
    private fun modifySingleInformation(g : Game, target : Role) : Unit {
        assert(target.information.seen.isNotEmpty())
        val alreadySeen : MutableSet<Role> = HashSet()
        // start alreadySeen with yourself so that oberon can't make a target see themselves
        alreadySeen.add(target)
        // collect all seen roles from information
        target.information.seen.forEach {
            alreadySeen.add(it.seen)
        }
        // shuffle roles in game
        val shuffledRoles = g.rolesInGame.shuffled()

        // assert that no role can already see everyone
        assert(alreadySeen.size < shuffledRoles.size)

        // add random seen information on a role we didn't previously see to the target
        target.information.add(ThavalonInformation.SingleSeenInformation(shuffledRoles.first { it !in alreadySeen }))
    }

    /**
     * Modifies an PairSeenInformation such that that the target has one name obfuscated
     */
    private fun modifyPairSeenInformation(target : Role) : Unit {
        assert(target.information.pairSeen.isNotEmpty())
        val toModify : ThavalonInformation.PairSeenInformation = target.information.pairSeen.random()
        if (Random.nextBoolean()) {
            toModify.A = UnknownRole
        } else {
            toModify.B = UnknownRole
        }
    }

    /**
     * Erases a RolePresentInformation from the target
     */
    private fun modifyRolePresentInformation(target : Role) : Unit {
        assert(target.information.rolePresent.isNotEmpty())
        // now we replace a random piece of rolePresent information with UnknownRole
        // remove a random piece of information
        target.information.rolePresent.remove(target.information.rolePresent.random())
        // now add Unknown Role as a present role
        target.information.rolePresent.add(ThavalonInformation.RolePresentInformation(UnknownRole))
    }

}